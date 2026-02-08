import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  runTransaction,
} from 'firebase/firestore';
import { db } from './config';

// ─── Topics ──────────────────────────────────────────────

export const getTopics = async (filters = {}) => {
  let q = collection(db, 'topics');
  const constraints = [];

  if (filters.status) {
    constraints.push(where('status', '==', filters.status));
  }
  if (filters.category) {
    constraints.push(where('category', '==', filters.category));
  }
  constraints.push(orderBy('createdAt', 'desc'));

  q = query(q, ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getTopic = async (id) => {
  const snap = await getDoc(doc(db, 'topics', id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

export const addTopic = async (data) => {
  return addDoc(collection(db, 'topics'), {
    ...data,
    status: 'available',
    purchasedBy: null,
    purchasedAt: null,
    orderId: null,
    createdAt: serverTimestamp(),
  });
};

export const updateTopic = async (id, data) => {
  return updateDoc(doc(db, 'topics', id), data);
};

export const deleteTopic = async (id) => {
  return deleteDoc(doc(db, 'topics', id));
};

// ─── Reserve Topic (atomic transaction) ──────────────────

export const reserveTopic = async (topicId, userId, userEmail) => {
  const topicRef = doc(db, 'topics', topicId);

  return runTransaction(db, async (transaction) => {
    const topicSnap = await transaction.get(topicRef);

    if (!topicSnap.exists()) {
      throw new Error('Topic not found.');
    }

    const topicData = topicSnap.data();

    if (topicData.status !== 'available') {
      throw new Error('This topic is no longer available.');
    }

    // Create order
    const orderRef = doc(collection(db, 'orders'));
    transaction.set(orderRef, {
      topicId,
      topicTitle: topicData.title,
      studentId: userId,
      studentEmail: userEmail,
      amount: topicData.price,
      paymentStatus: 'pending',
      utrNumber: '',
      createdAt: serverTimestamp(),
      confirmedAt: null,
    });

    // Reserve the topic
    transaction.update(topicRef, {
      status: 'reserved',
      purchasedBy: userId,
      purchasedAt: serverTimestamp(),
      orderId: orderRef.id,
    });

    return orderRef.id;
  });
};

// ─── Orders ──────────────────────────────────────────────

export const getOrders = async (filters = {}) => {
  let q = collection(db, 'orders');
  const constraints = [];

  if (filters.paymentStatus) {
    constraints.push(where('paymentStatus', '==', filters.paymentStatus));
  }
  if (filters.studentId) {
    constraints.push(where('studentId', '==', filters.studentId));
  }
  constraints.push(orderBy('createdAt', 'desc'));

  q = query(q, ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const updateOrder = async (id, data) => {
  return updateDoc(doc(db, 'orders', id), data);
};

export const confirmOrder = async (orderId, topicId) => {
  await updateDoc(doc(db, 'orders', orderId), {
    paymentStatus: 'confirmed',
    confirmedAt: serverTimestamp(),
  });
  await updateDoc(doc(db, 'topics', topicId), {
    status: 'sold',
  });
};

export const rejectOrder = async (orderId, topicId) => {
  await updateDoc(doc(db, 'orders', orderId), {
    paymentStatus: 'rejected',
  });
  await updateDoc(doc(db, 'topics', topicId), {
    status: 'available',
    purchasedBy: null,
    purchasedAt: null,
    orderId: null,
  });
};

// ─── Inquiries ───────────────────────────────────────────

export const submitInquiry = async (data) => {
  return addDoc(collection(db, 'inquiries'), {
    ...data,
    createdAt: serverTimestamp(),
    read: false,
  });
};

export const getInquiries = async () => {
  const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const markInquiryRead = async (id) => {
  return updateDoc(doc(db, 'inquiries', id), { read: true });
};
