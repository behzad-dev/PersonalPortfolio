import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SchoolIcon from "@mui/icons-material/School";
export default function TimelineComponent() {
  return (
    <Timeline
      position="alternate"
      className="BStyle9"
      // style={{ background: "black", color: "white" }}
    >
      {" "}
      <TimelineItem>
        {/* <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color=""
        >
          1991
        </TimelineOppositeContent> */}
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <ChildCareIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Since young age I was fascinated with technology
          </Typography>
          {/* <Typography>In Tehran</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2002
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            I made my first Weblog (html,js) ! back then it was so cool !
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2003
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Made a game with power point :D you might wonder how, but I did :D
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2004
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Took Qbasic classes and even made a robot with it
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2010
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Started studying Software Engineering
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          M E A N W H I L E
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            PHP -Course(sharif uni) <br /> <br />
            Programming ASP.NET
            <br /> <br />
            Part time work as programmer
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Got my degree in B.Sc. Software Engineering
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Started Working and cooperating in different companies and gaining
            more experience
            <br /> (ASP.NET,MVC , Python,CMS, Hosting)
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon fontSize="medium" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Went to country service ! it was a new challenging experience
            <br />
            meanwhile worked on different applications and games
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        >
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon fontSize="medium" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Service finished and started gathering more experience
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          fontSize="large"
          sx={{ m: "auto 0" }}
          variant="body2"
          color=""
        ></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <SchoolIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Ended up In Mellat Bank IT Section (CoreBanking) (Micro Services
            with IBM Integration bus, ODM and...) <br />
            And Also worked with delphi and ReactJS
          </Typography>
          {/* <Typography>Because it&apos;s awesome!</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            I Always had eager to learn and gain more experience , so i decided
            to move to Europe !<br />I ended up in Germany for a master degree !
            <br />
            Currently living in amazing city of Hamburg !
          </Typography>
          {/* <Typography>because i loved it!</Typography> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
