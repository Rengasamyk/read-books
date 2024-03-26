import React from "react";
//import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
//import HowToRegIcon from "@mui/icons-material/HowToReg";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
export const IMenus = [
   
     
      {
        link: "/",
        name: "Home",
        icon: <HomeIcon className="text-white"/>
      },
      // {
      //   link: "/",
      //   name: "Our Products",
      //   icon: <LockOpenIcon className="text-white" />,
      //   submenu: [
      //       {
      //         link: "/",
      //         name: "Tution",
      //         icon: <LockOpenIcon className="text-white" />,
      //       },
      //       {
      //           link: "/",
      //           name: "Solar Energy",
      //           icon: <LockOpenIcon className="text-white" />,
      //         },
      //         {
      //           link: "/",
      //           name: "Housing",
      //           icon: <LockOpenIcon className="text-white" />,
      //         },
      //     ],
      // },
      {
        link: "/blog",
        name: "Partner With Us",
        icon: <BookIcon className="text-white" />,
      },
      {
        link: "/blog",
        name: "Contact Us",
        icon: <BookIcon className="text-white" />
      },
    
      {
        link: "/blog",
        name: "Blog",
        icon: <BookIcon className="text-white" />
      },
     
      // {
      //   name: "Login",
      //   onClick: openLoginDialog,
      //   icon: <LockOpenIcon className="text-white" />
      // },
    // {
    //   title: 'Services',
    //   url: '/services',
    //   submenu: [
    //     {
    //       title: 'web design',
    //       url: 'web-design',
    //     },
    //     {
    //       title: 'web development',
    //       url: 'web-dev',
    //     },
    //     {
    //       title: 'SEO',
    //       url: 'seo',
    //     },
    //   ],
    // },
    // ...
  ];