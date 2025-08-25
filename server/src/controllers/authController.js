import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../utils/generateToken.js';

export async function register(req, res) {
  try {
    const { email, password, role, name } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'Email already registered' });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash, role: role || 'charter', name });
    const token = generateToken({ id: user._id, email: user.email, role: user.role });
    return res.status(201).json({
      user: { id: user._id, email: user.email, role: user.role, name: user.name },
      token,
    });
  } catch (err) {
    console.error('Register error:', err.message);
    return res.status(500).json({ error: 'Server error' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = generateToken({ id: user._id, email: user.email, role: user.role });
    return res.json({ user: { id: user._id, email: user.email, role: user.role, name: user.name }, token });
  } catch (err) {
    console.error('Login error:', err.message);
    return res.status(500).json({ error: 'Server error' });
  }
}

export async function forgotPassword(req, res) {
  try {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ error: 'Email is required' });
    const user = await User.findOne({ email });
    if (!user) return res.json({ ok: true }); // do not reveal existence
    // For now, we just acknowledge; real email sending can be added later.
    // Optionally generate a reset token:
    // const token = crypto.randomUUID(); user.resetToken = token; user.resetTokenExp = new Date(Date.now()+3600e3); await user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.error('Forgot password error:', err.message);
    return res.status(500).json({ error: 'Server error' });
  }
}
