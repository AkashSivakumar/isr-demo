export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== "test") {
      return res.status(401).json({ message: 'Invalid token' });
  }

  const pathToRevalidate = req.query.path;

  try {
      // This will revalidate the page at the specified path
      await res.revalidate(pathToRevalidate);
      return res.json({ revalidated: true });
  } catch (err) {
      // If there was an error, return it
      console.log(err)
      return res.status(500).send('Error revalidating');
  }
}
