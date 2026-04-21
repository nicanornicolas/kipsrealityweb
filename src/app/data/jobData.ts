export interface Jobs {
    id:number;
    title:string;
    description:string;
    image:string
}
const demoEnabled = process.env.NEXT_PUBLIC_ENABLE_DEMO_CONTENT === 'true';

export const jobPositions:Jobs[] = demoEnabled ? [
{
id: 1,
title: "Frontend Web developer",
description: "The frontend developer will be expected to design and code web apps. Must have 1 year experience",
image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
},
{
id: 2,
title: "Backend Web developer",
description: "The frontend developer will be expected to design and code web apps. Must have 1 year experience",
image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
},

{
id: 3,
title: "Fullstack developer",
description: "The frontend developer will be expected to design and code web apps. Must have 1 year experience",
image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
},

] : [];
