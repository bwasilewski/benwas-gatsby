import Unsplash, { toJson } from 'unsplash-js'

const accessKey = process.env.UNSPLASH_ACCESS_KEY
const secretKey = process.env.UNSPLASH_SECRET_KEY

const unsplash = new Unsplash({
  applicationId: accessKey,
  secret: secretKey
})

export default () => {
  unsplash.search.photos('curated', 1)
    .then(toJson)
    .then(json => {
      console.log('It worked: ', json)
    })
}
