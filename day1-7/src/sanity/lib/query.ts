
import { groq } from "next-sanity";

export const allproducts = groq `*[_type == "products" ]`;
export const four = groq `*[_type == "products" ][0..8]
{_id,
name,
price,
description,
"imgurl":image.asset->url,
discountPercent,  
new,
colors,
sizes,}`;

export default four;
