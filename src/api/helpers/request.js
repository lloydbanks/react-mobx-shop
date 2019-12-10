import 'regenerator-runtime/runtime'
import firebase from '../fb'

const db = firebase.firestore()

export default async function(url, options = { type: 'get', data: {} }) {
  const { type, data } = options
  const response = await db.collection(url)

  switch (type) {
    case 'get':
      const getResponse = await response.get()
      const getData = []
      getResponse.forEach(doc => getData.push({ id: doc.id, ...doc.data() }))

      return getData
    case 'add':
    case 'change':
      const updData = response.doc(data.id)
      updData.set({ ...data })

      break
    case 'remove':
      const rmData = response.doc(data.id)
      rmData.delete()

      break
  }
}
