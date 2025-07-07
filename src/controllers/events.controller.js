const Event = require('../models/events.model');

// Create a new event
exports.create = async (req, res) => {
  try {
    const eventId = await Event.create(req.body);
    res.status(201).json({ id: eventId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get event by ID
exports.findById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update event
exports.update = async (req, res) => {
  try {
    const updated = await Event.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Event not found or no fields to update' });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete event
exports.delete = async (req, res) => {
  try {
    const deleted = await Event.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Event not found' });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all events with pagination/filtering
exports.findAll = async (req, res) => {
  try {
    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      sortBy: req.query.sortBy || 'StartDate',
      sortOrder: req.query.sortOrder || 'DESC',
      status: req.query.status,
      city: req.query.city,
      search: req.query.search
    };
    const events = await Event.findAll(options);
    const total = await Event.count(options);
    // res.json({ data: events, total });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};