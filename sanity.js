import {URLSearchParams} from '@visto9259/urlsearchparams-react-native';
import 'react-native-url-polyfill/auto';
import {createClient} from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId : "byxyjp7b",
    dataset : "production",
    useCdn : true,
    apiVersion :"2021-10-21"
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client