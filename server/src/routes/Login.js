

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Login successful' });
  });