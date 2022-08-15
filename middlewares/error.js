const Error = {
  err: ((err, _req, res, _next) => {
    console.error(err);
    if (typeof err.code !== 'number') {
      return res.status(500).json({ message: 'Erro no code' });
    }
    return res.status(err.code || 500).json({ message: err.message });
  }),
};

module.exports = Error;