
export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { name, email, message } = req.body || {}
  console.log('Contact form', { name, email, message })
  return res.status(200).json({ ok:true })
}
