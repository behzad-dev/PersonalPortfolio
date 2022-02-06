import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Born" {...a11yProps(0)} />
        <Tab label="School" {...a11yProps(1)} />
        <Tab label="Career" {...a11yProps(2)} />
        <Tab label="Hobbies" {...a11yProps(3)} />
        <Tab label="Sports" {...a11yProps(4)} />
        <Tab label="Games" {...a11yProps(5)} />
        <Tab label="Languages" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        1991
      </TabPanel>
      <TabPanel value={value} index={1}>
        many schools
      </TabPanel>
      <TabPanel value={value} index={2}>
        couple of
      </TabPanel>
      <TabPanel value={value} index={3}>
        <li>Jogging!</li>
        <li>
          <b>gaming</b>
        </li>

        <li>
          {" "}
          <b>Hiking</b>
        </li>
      </TabPanel>
      <TabPanel value={value} index={4}>
        football
      </TabPanel>
      <TabPanel value={value} index={5}>
        LOL
      </TabPanel>
      <TabPanel value={value} index={6}>
        English
      </TabPanel>
    </Box>
  );
}
