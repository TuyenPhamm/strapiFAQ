import React, { useState } from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
export default function StrapiFAQ() {
    const [openItems, setOpenItems] = useState<boolean[]>([]);

    const handleItemClick = (index) => {
        const updatedOpenItems = [...openItems];
        updatedOpenItems[index] = !updatedOpenItems[index];
        setOpenItems(updatedOpenItems);
    };
    return (
        <div>
            <div className=' max-w-[1440px] mx-auto relative  '>
                    <div className=' text-[43px] max-992:text-[33px] max-1440:px-[8.3%] text-[#1d1b84] font-bold max-w-[648px] mx-auto pt-[190px] pb-[37px] mb-[52px]'>
                    <h1 >
                        Frequently Asked
                    </h1>
                    <h1>
                        Questions
                    </h1>
                    <img className=' absolute left-[50px]' src="https://strapi.io/assets/white-hero/bottom-left.svg" alt="" />
                </div>
            </div>

            <div>
                <div className='mt-[84px]  '>
                    <div>
                        <h1 className='text-[43px] max-992:text-[33px] text-[#1d1b84] font-bold text-center mx-auto mb-[96px]'>General</h1>
                    </div>
                    <div className='w-[84%] mx-auto max-w-[914px]'>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(0)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What is Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[0] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[0]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p className='mb-[31px]'>Strapi is an open-source, Node.js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks.</p>
                                                <p>Strapi also enables content editors to streamline content delivery (text, images, video, etc) across any devices.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(1)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What is a Headless CMS?
                                            </div>
                                        </ListItemText>
                                        {openItems[1] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[1]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p className='mb-[25px]'>A headless CMS is a back-end only content management system (CMS) built from the ground up as a content repository that makes content accessible via an <span className='font-semibold'>API</span> for display on any device.</p>

                                                <p>Headless CMS are also particularly suitable for websites designed using the <span className='text-[#7e43e6]'>Jamstack</span> model where JavaScript, APIs, and Markup work together to make web development easier and user experiences better.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(2)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What is an API?
                                            </div>
                                        </ListItemText>
                                        {openItems[2] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[2]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. In case you want to connect a React application with Strapi, we say that React is the client and Strapi the system. Indeed, React will communicate to Strapi, by making HTTP requests. Strapi will then give a response back to your client.</p>
                                                <p>If your Strapi application contains restaurants and you want to list them in your React application, all you need to do is to make an HTTP request to Strapi which will take care to give you a response containing your restaurants.</p>
                                                <p>The <span className='text-[#7e43e6]'>API Endpoints documentation</span> will give you all the keys in hand to interact with your Strapi API.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(3)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What are the most popular Strapi use cases?
                                            </div>
                                        </ListItemText>
                                        {openItems[3] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[3]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Traditional use cases include <span className='text-[#7e43e6]'>static websites, mobile apps, e-commerce, editorial</span> and <span className='text-[#7e43e6]'>corporate websites</span>. However, you can use Strapi to build any type of content-oriented applications including delivery to portable IoT devices or internal tools.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(4)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                How do I start a Strapi project on my computer?
                                            </div>
                                        </ListItemText>
                                        {openItems[4] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[4]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Dive in your terminal and run <span className='font-semibold'>yarn create strapi-app my-project --quickstart</span> or <span className='font-semibold'>npx create-strapi-app my-project --quickstart</span> using npx. Follow our documentation for more information.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(5)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I try Strapi without installing it?
                                            </div>
                                        </ListItemText>
                                        {openItems[5] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[5]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>*Yes**, you can get access to a hosted Strapi project containing existing content types and data for you to play with by requesting a <span className='text-[#7e43e6]'>demo</span>.</p>
                                                <p>Fill the form, we will take care of everything.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(6)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                How do I deploy my Strapi project?
                                            </div>
                                        </ListItemText>
                                        {openItems[6] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[6]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Strapi is self-hosted. It's up to you to decide where to deploy and host your Strapi project. We have a list of <span className='text-[7e43e6]'>deployment guides</span> for Amazon AWS, Microsoft Azure, DigitalOcean, Google App Engine and Heroku. You can also use our <span className='text-[7e43e6]'>1-click deploy buttons</span> and <span className='text-[7e43e6]'>Docker installation</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(7)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I create or update content types in production?
                                            </div>
                                        </ListItemText>
                                        {openItems[7] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[7]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>No</span>. Due to how Node.js works, in order for changes to take effect, that would require Node to restart the server. This could potentially cause downtime of your production service and likewise these changes should be tracked in some kind of source control.</p>
                                                <p>At this time and in the future there is no plan to allow model creating or updating while in a production environment, and there is currently no plans to move model settings into the database. There is no known nor recommended workarounds for this.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(8)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What's the definition of a project?
                                            </div>
                                        </ListItemText>
                                        {openItems[8] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[8]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>A project is a Strapi instance sharing the same Content Types structure and hosted on localhost or under the same domain. If a Strapi project is deployed in several environments or scaled on several instances on localhost or under the same domain, it is considered as only one project.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(9)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I be informed of new features to come?
                                            </div>
                                        </ListItemText>
                                        {openItems[9] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[9]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> We are using Product Board for our official <span className='text-[#7e43e6]'>Roadmap and feature requests</span>. Feel free to browse them.</p>
                                                <p>You can also subscribe to our <span className='text-[#7e43e6]'>Product updated newsletter</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(10)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                How long does it take to learn Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[10] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[10]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>It usually takes developers less than 5 minutes to get up and running with Strapi. You can easily follow our <span className='text-[#7e43e6]'>Quick start</span> to get started.</p>
                                                <p><span className='text-[#7e43e6]'>As a developer</span>, it will take a few hours to get familiar with the source code, admin panel, and more advanced concepts to customize or integrate Strapi with other tools.</p>
                                                <p><span className='text-[#7e43e6]'>As a content editor</span> you are using an admin panel which has a simple interface, so you can easily get used to it in less than an hour.</p>
                                                <p>You're not alone though, Strapi has an engaged and welcoming community that writes tutorials and helps each other out. Enroll in the <span className='text-[#7e43e6]'>academy</span> and learn the fundamentals of Strapi in 3h.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(11)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Is there a documentation for developers?
                                            </div>
                                        </ListItemText>
                                        {openItems[11] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[11]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Yes! <span className='text-[#7e43e6]'>Developer docs</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(12)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Is there a documentation for content editors?
                                            </div>
                                        </ListItemText>
                                        {openItems[12] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[12]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> You can find the User guide <span className='text-[#7e43e6]'>here</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(21)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Do you have a list of tutorials?
                                            </div>
                                        </ListItemText>
                                        {openItems[21] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[21]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> You can browse official and community tutorials by following this <span className='text-[#7e43e6]'>link.</span></p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(13)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Who is behind Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[13] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[13]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Strapi is actively sponsored and maintained by Strapi, Inc the company behind the Strapi open-source project. Visit <span className='text-[#7e43e6]'>the company page</span> to learn more about the company and the team.</p>
                                                <p>Without forgetting our <span className='text-[#7e43e6]'>awesome</span> community which brings us enormously every day.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(14)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Is Strapi Open Source?
                                            </div>
                                        </ListItemText>
                                        {openItems[14] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[14]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Yes! Strapi is published under a standard MIT license. We're developing Strapi in the open, maintaining a public <span className='text-[#7e43e6]'>product roadmap</span>, and using a <span className='text-[#7e43e6]'>Request for Changes</span> repository to create consensus among the core team and community.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(15)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I contribute to Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[15] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[15]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> Feel free to contribute to our <span className='text-[#7e43e6]'>Github repository</span>. You'll be able to contribute under the <span className='text-[#7e43e6]'>Contributor License Agreement</span> (CLA).</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(16)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                How is Strapi different from traditional CMS such as Wordpress?
                                            </div>
                                        </ListItemText>
                                        {openItems[16] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[16]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Traditional CMS such as WordPress or Drupal are monolithic systems that include the backend UI, plugins, front-end templates, CSS, a web server, and a database. They tend to be slower, heavier, and require a lot of custom development to become responsive to various display devices. In recent years, traditional CMSs have evolved to overcome these challenges and are often calling themselves Headless although most of them are in fact Decoupled.</p>
                                                <p>If you want to learn more about Headless CMS, have a look at this extensive <span className='text-[#7e43e6]'>guide</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(17)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Why should I use a self-hosted CMS?
                                            </div>
                                        </ListItemText>
                                        {openItems[17] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[17]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>By choosing a self-hosted solution you don't give up on data privacy or lock yourself in. Data security and privacy is an increasingly important topic right now and for the future. This is why it is very important that you can keep full control over your data as well as your costs.</p>                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(18)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I customize Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[18] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[18]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> The admin panel is easily customizable as well as the API. You can also extend your project with <span className='text-[#7e43e6]'>custom plugins</span> in few seconds.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(19)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Where can I find plugins and providers?
                                            </div>
                                        </ListItemText>
                                        {openItems[19] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[19]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>We have an <span className='text-[#7e43e6]'>awesome-strapi</span> Github repository that lists useful resources that can be used in your Strapi project. Feel free to browse the <span className='text-[#7e43e6]'>Plugin & Providers section</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(20)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                I have a question/issue. Where should I ask?
                                            </div>
                                        </ListItemText>
                                        {openItems[20] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[20]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Please join our <span className='text-[#7e43e6]'>official forum</span> if you have any questions or if you want to start a discussion. If you want to learn more about Headless CMS, have a look at this <span className='text-[#7e43e6]'>extensive guide</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-[84px] '>
                    <div>
                        <h1 className='text-[43px] max-992:text-[33px] text-[#1d1b84] font-bold text-center mx-auto mb-[96px]'>Enterprise Edition</h1>
                    </div>
                    <div className='w-[83%] mx-auto max-w-[914px] '>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(22)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                How many environments or instances are provided for a project?
                                            </div>
                                        </ListItemText>
                                        {openItems[22] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[22]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>You can create as many environments as needed for your Strapi projects. You can also create several instances of Strapi (with the same content modeling) for horizontal scaling.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(23)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Which plan should I use?
                                            </div>
                                        </ListItemText>
                                        {openItems[23] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[23]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>The plan you choose will depend on your needs. We advise you to make your choice by looking at our comparison table on our <span className='text-[#7e43e6]'>pricing page</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(24)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I try a plan for free?
                                            </div>
                                        </ListItemText>
                                        {openItems[24] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[24]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> You can try our Bronze and Silver plans for free. Have a look at our <span className='text-[#7e43e6]'>pricing page</span> to get started.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(25)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Are Strapi Enterprise Edition plans only available as subscriptions or is it possible to buy a lifetime license?
                                            </div>
                                        </ListItemText>
                                        {openItems[25] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[25]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>While we generally don't sell lifetime licenses, we can be flexible and offer lifetime licenses to companies that want them under certain conditions. Contact us for more information.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(26)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What companies are using Strapi in production?
                                            </div>
                                        </ListItemText>
                                        {openItems[26] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[26]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Thousands of companies such as <span className='text-[#7e43e6]'>Delivery Hero, Societe Generale</span> and <span className='text-[#7e43e6]'>IBM</span> are using Strapi in production today. Check out our <span className='text-[#7e43e6]'>showcase</span> to see more examples.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(27)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                How is the Enterprise version distributed?
                                            </div>
                                        </ListItemText>
                                        {openItems[27] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[27]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>The Enterprise Edition is distributed through a private npm registry. So you just need to install additional node modules to get all Enterprise Edition features.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(28)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I have a discount as a Student/Professor/Non-profit organization/OSS project?
                                            </div>
                                        </ListItemText>
                                        {openItems[28] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[28]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Yes! Feel free to <span className='text-[#7e43e6]'>request a free bronze plan</span> if you match these criteria.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[84px] '>
                    <div>
                        <h1 className='text-[43px] max-992:text-[33px] text-[#1d1b84] font-bold text-center mx-auto mb-[96px]'>Miscellaneous</h1>
                    </div>
                    <div className='w-[83%] mx-auto max-w-[914px] '>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(29)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Is Strapi only for developers or non-technical people as well ?
                                            </div>
                                        </ListItemText>
                                        {openItems[29] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[29]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Usually, developers are the ones downloading, setting up Strapi, creating the content architecture and connecting. Once that's done, authors and content editors get onboarded to the platform to write and distribute content.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(30)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Is Strapi recruiting?
                                            </div>
                                        </ListItemText>
                                        {openItems[30] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[30]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Absolutely! Feel free to browse our <span className='text-[#7e43e6]'>open positions.</span></p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(31)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I write for Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[31] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[31]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Yes! We do have a <span className='text-[#7e43e6]'>Write for the community</span> program which aims at gathering writers, video makers to create educational content for the community.</p>
                                                <p>More information <span className='text-[#7e43e6]'>here</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(32)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Where is Strapi based?
                                            </div>
                                        </ListItemText>
                                        {openItems[32] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[32]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Strapi is based in Paris. However we have some Strapiers all over the world like United States, Spain, Zambia. We are remote-first so people from different countries can apply to Strapi.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(33)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I talk with people using Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[33] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[33]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> We have an <span className='text-[#7e43e6]'>official Dicord server</span> for you to come chat with us and the community.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(34)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I organize a Strapi meetup?
                                            </div>
                                        </ListItemText>
                                        {openItems[34] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[34]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> You can follow the instructions on this <span className='text-[#7e43e6]'>Github repository</span> to get started!</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(35)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I see some projects made with Strapi?
                                            </div>
                                        </ListItemText>
                                        {openItems[35] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[35]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                            <p><span className='font-semibold'>Yes!</span> Feel free to browse our <span className='text-[#7e43e6]'>official showcase</span> and <span className='text-[#7e43e6]'>user stories.</span></p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(36)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Do you have a React component library for Strapi plugins?
                                            </div>
                                        </ListItemText>
                                        {openItems[36] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[36]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes!</span> <span className='text-[#7e43e6]' >Buffet.js</span> is the React component library made with styled-component which is used in Strapi.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[84px] '>
                    <div>
                        <h1 className='text-[43px] max-992:text-[33px] text-[#1d1b84] font-bold text-center mx-auto mb-[96px]'>Ecosystem</h1>
                    </div>
                    <div className='w-[83%] mx-auto max-w-[914px] '>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(37)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Why Headless CMS?
                                            </div>
                                        </ListItemText>
                                        {openItems[37] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[37]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Beyond benefits like a faster, more secure performance at a lower cost, the biggest reason why anyone should be thinking about headless CMS is flexibility.</p>
                                                <p>Headless CMS represent the future of content delivery. Learn more about Headless CMS with our <span className='text-[#7e43e6]'>2021 Headless guide</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(38)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What is the Jamstack?
                                            </div>
                                        </ListItemText>
                                        {openItems[38] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[38]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>Jamstack is an architecture designed to make the web faster, more secure, and easier to scale.</p>
                                                <p>It builds on many of the tools and workflows which developers love, and which bring maximum productivity.</p>
                                                <p>Have a look at this <span className='text-[#7e43e6]'>article</span> to learn more.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(39)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Why Jamstack?
                                            </div>
                                        </ListItemText>
                                        {openItems[39] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[39]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>With <span className='text-[#7e43e6]'>Jamstack</span>, the entire front end is prebuilt into highly optimized static pages and assets during a build process.</p>
                                                <p>This process of pre-rending results in sites which can be served directly from a CDN, reducing the cost, complexity and risk, of dynamic servers as critical infrastructure.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(40)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                What is a Static Site Generator?
                                            </div>
                                        </ListItemText>
                                        {openItems[40] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[40]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>A static site can be defined as a website that is sourced from purely static HTML files, it takes the source files and generates an entire website or a static site.</p>
                                                <p>The process is simplified, removing the need to heavily depend on databases or other external data sources.</p>
                                                <p>Have a look at <span className='text-[#7e43e6]'>this article</span> to learn more about different static site generators.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(41)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Can I use Strapi with a programming language, javascript framework, static site generator?
                                            </div>
                                        </ListItemText>
                                        {openItems[41] ?
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[41]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p><span className='font-semibold'>Yes</span>, you can absolutely use Strapi for managing the content of your <span className='text-[#7e43e6]'>Ruby, Python, React, Nuxt.js, Gatsby, Gridsome</span> (and more...) project. See our <span className='text-[#7e43e6]'>integration</span> documentation for integrating you favorite stack with Strapi.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                        <div className='mb-[8px] rounded-[8px] border-[1px] border-[#eaf2fa] hover:bg-[#fff] bg-[#f6fafe]'>
                            <div className='p-[10px]' >
                                <List component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton className="flex justify-between" onClick={() => handleItemClick(42)}>
                                        <ListItemText className=' w-[80%]' >
                                            <div className='text-[15px] font-semibold  text-[#1d1b84] leading-[22px] pr-[10px] pb-[24px]'>
                                                Where can I find plugins and providers?
                                            </div>
                                        </ListItemText>
                                        {openItems[42] ? 
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                -
                                            </div>
                                            :
                                            <div className="w-[26px] h-[26px] pb-[4px] text-[#c8cee1] font-bold border-[1px] border-[#c8cee1] flex items-center justify-center rounded-full " >
                                                +
                                            </div>
                                        }
                                    </ListItemButton>
                                    <Collapse in={openItems[42]} timeout="auto" unmountOnExit>
                                        <ListItemIcon >
                                            <div className="text-[19px] text-[#344b80] px-[15px] leading-relaxed pb-[33px]">
                                                <p>We have an <span className='text-[#7e43e6]'> awesome-strapi</span> Github repository that list useful resources that can be used in your Strapi project. Feel free to browse the <span className='text-[#7e43e6]'> Plugin & Providers section</span>.</p>
                                            </div>
                                        </ListItemIcon>
                                    </Collapse>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='absolute right-[0]' src="https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg" alt="" />
                    <div className='pt-[175px] pb-[100x] relative'>
                        <div>
                            <h1 className='text-[43px] max-992:text-[33px] text-[#1d1b84] font-bold text-center mx-auto mb-[25px]'>Unleash content.</h1>
                        </div>
                        <div className=' mx-auto max-w-[914px] mx-auto'>
                            <div className='w-[310px] max-400:w-[80%] mx-auto text-center text-[15px] font-medium text-[#1d1b84] leading-[22px] px-[40px] py-[18px] bg-[transparent] border-2 rounded-[8px]'>
                                <p className='leading-[1.5] text-[#292875] ' >Get started on Strapi Cloud ☁️</p>
                            </div>
                            <div className='max-992:hidden pt-[20px] mx-auto w-[383.641px]'>
                                <button className=' w-[100%] p-[11px] font-medium rounded-[8px] bg-[#4945ff]  text-[#FFF] mx-auto'>npx create-strapi-app@latest my-project</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[200px]'>

                </div>
            </div>
        </div>

    )
}
