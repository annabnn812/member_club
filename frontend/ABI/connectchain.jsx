import {   ethChain, hardChain,  goerliChain, optimismChain, baseChain, zoraChain, optimismtestChain, basetestChain, zoratestChain } from './chainchange';
import 'sf-font';
import { Col, Dropdown } from '@nextui-org/react';
import React from 'react';
import { useEffect } from 'react';

export default function ConnectChain() {
    const [selected, setSelected] = React.useState(new Set(["Set Network"]));
    const selectedValue = React.useMemo(
      () => Array.from(selected).join(", ").replaceAll("_", " "),
      [selected]
    );

    const blockImage = React.useMemo(() => {
        var eth = "Ethereum";
        var goe = "Goerli";
        var hard = "Hardhat";
        var init = "Set Network";
        var opti= "Optimism";
        var base = "Base";
        var zora ="Zora";
        var optitest= "Optimism Test";
        var basetest = "Base Test";
        var zoratest ="Zora Test"; 
        

        if (selectedValue == eth) {
            return(
              <img src='./ethereumlogo.png' width={"160px"}/>
            )
        }
        
        else if (selectedValue == opti) {
          return(
            <img src='./optimism.png' width={"160px"}/>
          )
        }
        else if (selectedValue == base) {
          return(
            <img src='./base-logo.png' width={"160px"}/>
          )
        }
        else if (selectedValue == zora) {
          return(
            <img src='./Zora-logo.png' width={"160px"}/>
          )
        }
        
        else if (selectedValue == goe) {
            return(
                <h3>Goerli Testnet</h3>
            )
          }
          else if (selectedValue == optitest) {
            return(
                <h3>Optimism Testnet</h3>
            )
          }
          else if (selectedValue == basetest) {
            return(
                <h3>Base Testnet</h3>
            )
          }
          else if (selectedValue == zoratest) {
            return(
                <h3>Zora Testnet</h3>
            )
          }
        else if (selectedValue == hard) {
            return(
                <h3>Hardhat Node</h3>
            )
          }
        else if (selectedValue == init) {
            return(
                <div className='mt-4'>
                <h3>Select Network</h3>
                </div>
            )
          }
      })

    async function enableChain() {
       
        var eth = "Ethereum";
        var goe = "Goerli";
        var hard = "Hardhat";
        var opti= "Optimism";
        var base = "Base";
        var zora ="Zora";
        var optitest= "Optimism Test";
        var basetest = "Base Test";
        var zoratest ="Zora Test"; 
        
       if (eth == selectedValue) {
          ethChain();
        } else if (hard == selectedValue) {
          hardChain();
        } else if (opti == selectedValue) {
          optimismChain();
        } else if (zora == selectedValue) {
          zoraChain();
        } else if (base == selectedValue) {
          baseChain();
        } else if (goe == selectedValue) {
          goerliChain();
        } 
        else if (optitest == selectedValue) {
          optimismtestChain();
        } 
        else if (basetest == selectedValue) {
          basetestChain();
        } 
        else if (zoratest == selectedValue) {
          zoratestChain();
        } 
      }
      useEffect(() => {
        enableChain();
      }, [selected]);


    return (
        <Col css={{ marginTop: "$6" }}>
          <Dropdown>
            <Dropdown.Button
            aria-label='Connect Wallet'
              flat
              style={{
                background: "#00000070",
                boxShadow: "0px 0px 4px #ffffff",
                fontFamily: "SF Pro Display",
                fontWeight: "500",
                color: "white",
                fontSize: "20px",
              }}
              css={{ tt: "capitalize" }}
            >
            {blockImage}
            </Dropdown.Button>
            <Dropdown.Menu
                  css={{ 
                  backgroundColor:'#ffffff30'
                }}
              aria-label="Single selection actions"
              color="secondary"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
              textValue={selected}
            > 
              <Dropdown.Item textValue="Ethereum" key="Ethereum">
                <img src="ethereumlogo.png" width={"110px"} />
              </Dropdown.Item>

              <Dropdown.Item textValue="Optimism" key="Optimism">
                <img src="optimism.png" width={"110px"} />
              </Dropdown.Item>

              <Dropdown.Item textValue="Base" key="Base">
                <img src="base-logo.png" width={"110px"} />
              </Dropdown.Item>

              <Dropdown.Item textValue="Zora" key="Zora">
                <img src="Zora-logo.png" width={"110px"} />
              </Dropdown.Item>

              <Dropdown.Item textValue="Hardhat" key="Hardhat">
                HardHat Node
              </Dropdown.Item>

              <Dropdown.Item textValue="Goerli" key="Goerli">
                Goerli TestNet
              </Dropdown.Item>

              <Dropdown.Item textValue="Optimism Test" key="Optimism Test">
                Optimism TestNet
              </Dropdown.Item>

              <Dropdown.Item textValue="Base Test" key="Base Test">
                Base TestNet
              </Dropdown.Item>

              <Dropdown.Item textValue="Zora Test" key="Zora Test">
                Zora TestNet
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Col>
      );
 }