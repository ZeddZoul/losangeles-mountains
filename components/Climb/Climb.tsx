import s from "./Climb.module.scss";
import {
  Tabs,
  Text,
  TabList,
  Box,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Climb = () => {
  return (
    <div className={s.Climb}>
      <div className={s.top}>
        <h2>
          <span>02.</span> Climb
        </h2>
        <p>
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.
        </p>
      </div>
      <Tabs className={s.Tabs} variant={"unstyled"}>
        <TabList bg="#414f6b" p="0px 20%">
          <Tab
            color={"#b0b4be"}
            fontFamily={"var(--other-font)"}
            fontWeight={700}
            fontSize={"20px"}
            _selected={{
              bgColor: "#b0b4be",
              color: " #414f6b",
              textDecoration: " underline",
            }}
            cursor="pointer"
            padding="5px 10px"
            border="none"
            bgColor={"transparent"}
          >
            Mountain 1
          </Tab>
          <Tab
            color={"#b0b4be"}
            fontFamily={"var(--other-font)"}
            fontWeight={700}
            fontSize={"20px"}
            _selected={{
              bgColor: "#b0b4be",
              color: " #414f6b",
              textDecoration: " underline",
            }}
            cursor="pointer"
            padding="5px 10px"
            border="none"
            bgColor={"transparent"}
          >
            Mountain 2
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            height={"600px"}
            bgImage={`url(/mountain_2.png)`}
            bgPos={"center"}
            bgSize={"cover"}
            p="100px 21%"
          >
            <Box
              bgColor="#ffffff"
              opacity={".8"}
              p="20px"
              width={"max-content"}
            >
              <Text
                marginLeft="20px"
                color="#414f6b"
                as="h2"
                fontFamily={"var(--other-font)"}
              >
                SCHEDULE
              </Text>
              <table>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    25 Nov 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    28 Nov 2016{" "}
                  </td>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    18 Dec 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    7 Jan 2017
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
              </table>
            </Box>
          </TabPanel>
          <TabPanel
            height={"600px"}
            bgImage={`url(/mountain_1.png)`}
            bgPos={"center"}
            bgSize={"cover"}
            p="100px 21%"
          >
            <Box
              bgColor="#ffffff"
              opacity={".8"}
              p="20px"
              width={"max-content"}
            >
              <Text
                marginLeft="20px"
                color="#414f6b"
                as="h2"
                fontFamily={"var(--other-font)"}
              >
                SCHEDULE
              </Text>
              <table>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    17 Nov 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    13 Dec 2016{" "}
                  </td>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    28 Dec 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    9 Feb 2017
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
              </table>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Accordion defaultIndex={[0]} allowMultiple className={s.Accordion}>
        <AccordionItem>
          <h2>
            <AccordionButton  color={"#b0b4be"}
            fontFamily={"var(--other-font)"}
            fontWeight={700}
            fontSize={"20px"}
            _selected={{
              bgColor: "#b0b4be",
              color: " #414f6b",
              textDecoration: " underline",
            }}
            cursor="pointer"
            padding="5px 10px"
            border="2px solid #b0b4be"
            bgColor={"#414f6b"}>
              <Box color="#b0b4be" as="span" flex="1" textAlign="left">
                Mountain 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel     height={"600px"}
            bgImage={`url(/mountain_2.png)`}
            bgPos={"center"}
            bgSize={"cover"}
            p="100px 21%">
            <Box
              bgColor="#ffffff"
              opacity={".8"}
              p="20px"
              width={"max-content"}
            >
              <Text
                marginLeft="20px"
                color="#414f6b"
                as="h2"
                fontFamily={"var(--other-font)"}
              >
                SCHEDULE
              </Text>
              <table>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    25 Nov 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    28 Nov 2016{" "}
                  </td>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    18 Dec 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    7 Jan 2017
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
              </table>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton  color={"#b0b4be"}
            fontFamily={"var(--other-font)"}
            fontWeight={700}
            fontSize={"20px"}
            _selected={{
              bgColor: "#b0b4be",
              color: " #414f6b",
              textDecoration: " underline",
            }}
            cursor="pointer"
            padding="5px 10px"
            border="2px solid #b0b4be"
            bgColor={"#414f6b"}>
              <Box color="#b0b4be" as="span" flex="1" textAlign="left">
                Mountain 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel    height={"600px"}
            bgImage={`url(/mountain_1.png)`}
            bgPos={"center"}
            bgSize={"cover"}
            p="100px 21%">
            <Box
              bgColor="#ffffff"
              opacity={".8"}
              p="20px"
              width={"max-content"}
            >
              <Text
                marginLeft="20px"
                color="#414f6b"
                as="h2"
                fontFamily={"var(--other-font)"}
              >
                SCHEDULE
              </Text>
              <table>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    17 Nov 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    13 Dec 2016{" "}
                  </td>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    28 Dec 2016{" "}
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    9 Feb 2017
                  </td>{" "}
                  <td
                    style={{
                      padding: "5px 20px",
                      textAlign: "left",
                      fontFamily: "var(--main-font)",
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Vestibulum viverra
                  </td>
                </tr>
              </table>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Climb;
