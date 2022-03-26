import React, {useState} from 'react'
import { Accordion, } from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStickyNote, } from '@fortawesome/free-regular-svg-icons';
import {
    faMapLocation,
    faPhone,
    faGlobe,
    faFile,
    faNetworkWired,
    faCircleNodes,
    faQrcode, faBarcode, faMicrochip,
    faMemory, faHardDrive, faTachographDigital,
    faCompactDisc, faPlugCircleMinus, faPlug, faPlugCirclePlus,
      faCodeBranch, faLaptopCode,
    faUser, faDatabase,
    faKey, faCheckCircle, faMinusCircle,
 
} from '@fortawesome/free-solid-svg-icons';
function SearchResult() {
    const [data,setData] = useState();
    const handleSearchClick = () => {
     
            axios.get('https://servicemanagementsystem.herokuapp.com/api/allRecords').then(res => {
                console.log(res.data)
                setData(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

  return (
    <>
    <div onClick={handleSearchClick}>Create New or Search Old Records</div>
    <Accordion defaultActiveKey="0">
        {data && data.map((data, i)=>{
            return (
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>{data.siteName}</Accordion.Header>
                    <Accordion.Body>
                         <div class="d-flex ">
                              <div class="input-group flex-nowrap w-50 p-3">
                                   <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMapLocation} /></span>
                                   <span class="input-group-text" id="addon-wrapping">Address</span>
                                   <input type="text" class="form-control" placeholder="Site Contact Number"  value={data.siteAddress}/>
                              </div>
                              <div class="input-group flex-nowrap w-50 p-3">
                                   <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPhone} /></span>
                                   <span class="input-group-text" id="addon-wrapping">Contact Number</span>
                                   <input type="text" class="form-control" placeholder="Site Contact Number"  value={data.siteContactNumber}/>
                              </div>
                               <div class="input-group flex-nowrap w-50 p-3">
                                   <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faStickyNote} /></span>
                                   <span class="input-group-text" id="addon-wrapping">Note</span>
                                   <input type="text" class="form-control" placeholder="Site Contact Number"  value={data.siteNote}/>
                              </div>

                         </div>
                              <h1>Network Section</h1>
                                 {data.network.map((net, i)=>{
                                     return (
                                         <>
                                         <div class="d-flex ">
                                         <div class="input-group  p-3">
                                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faNetworkWired} /></span>
                                        <input type="text" class="form-control" value={net.IP}/>
                                        </div>
                                        <div class="input-group  p-3">
                                         <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCircleNodes} /></span>
                                        <input type="text" class="form-control" value={net.subnetMask}/> 
                                        </div>
                                         <div class="input-group  p-3">
                                         <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faGlobe} /></span>
                                        <input type="text" class="form-control" value={net.gateway}/> 
                                        </div>
                                         <div class="input-group  p-3">
                                         <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faFile} /></span>
                                        <input type="text" class="form-control" value={net.sourceFile}/> 
                                        </div>
                                        </div>
                                        </>
                                     )
                                 })}
                                 <h1>Hardware Section</h1>
                                   {data.hardware.map((hard, i)=>{
                                     return (
                                         <>
                                          <div class="d-flex flex-wrap">
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faQrcode} /></span>
                                            <input type="text" class="form-control"
                                                value={hard.MakeModel} 
                                             />
                                        </div>
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faBarcode} /></span>
                                            <input type="text" class="form-control"
                                                value={hard.ServiceTagSerialNo}
                                                />
                                        </div>
                                        <div class="d-flex ">
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                                                <input type="text" class="form-control"
                                                   aria-label="CPU"
                                                    value={hard.CPU}
                                                   />
                                                <span class="input-group-text">GB</span>
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMicrochip} /></span>
                                                <input type="Number" class="form-control"
                                                    
                                                    value={hard.CPUQt}
                                                   />

                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMemory} /></span>
                                                <input type="Number" class="form-control"
                                                    value={hard.RAM}
                                                  />
                                                <span class="input-group-text">GB</span>
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faHardDrive} /></span>
                                                <input type="Number" class="form-control"
                                                  
                                                    value={hard.HDD}
                                                     />
                                                <span class="input-group-text">GB</span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faTachographDigital} /></span>
                                                <input type="text" class="form-control"
                                                   
                                                    value={hard.Graphic}
                                                   />
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCompactDisc} /></span>
                                                <input type="text" class="form-control"
                                                    
                                                    value={hard.DVDDrive}
                                                   />
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPlug} /></span>
                                                <input type="text" class="form-control"
                                                 
                                                    value={hard.PowerSupply}
                                                    />
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={hard.PowerSettoNever ? faPlugCirclePlus : faPlugCircleMinus} />
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Power Set to Never {hard.PowerSettoNever ? "ON" : "OFF"}
                                                    </label>
                                                </span>
                                                <span class="input-group-text" id="addon-wrapping">

                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input"
                                                            value={hard.PowerSettoNever}
                                                           
                                                            disabled
                                                            type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                        </>
                                     )
                                 })}
                                 <h1>Apps Section</h1>
                                 {data.apps.map(app=>{
                                     return (
                                          <div class="d-flex ">
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faLaptopCode} /></span>
                                                <input type="text" class="form-control"
                                                    
                                                    value={app.appsName}
                                                />
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                                                <input type="text" class="form-control"
                                                
                                                    value={app.appsVersion}
                                                />
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
                                                <input type="text" class="form-control"
                                                
                                                    value={app.appsUserName}
                                                />
                                            </div>
                                            <div class="input-group flex-nowrap w-50 p-3">
                                                <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                                                <input type="text" class="form-control"
                                        
                                                    value={app.appsPassword}
                                                />
                                            </div>
                                        </div>
                                     )
                                 })}
                                 <h1>Database Section</h1> 
                                 {data.DB.map(db=>{
                                     return (
                                         <div className="d-flex" >
                                        <div class="input-group flex-nowrap p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faDatabase} /></span>
                                            <input type="text"
                                                class="form-control"
                                               
                                                value={db.DBname}
                                                />
                                        </div>
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCodeBranch} /></span>
                                            <input type="text"
                                                class="form-control"
                                              
                                                value={db.DBVersion}
                                               />
                                        </div>
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
                                            <input type="text"
                                                class="form-control"
                                               
                                                value={db.DBsaPassword}
                                               />
                                        </div>
                                        <div class="input-group flex-nowrap w-50 p-3">
                                            <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={db.DBinstalled === true ? faCheckCircle : faMinusCircle} />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Update Turn {db.DBinstalled === true ? "ON" : "OFF"}
                                                </label>
                                            </span>
                                            <span class="input-group-text" id="addon-wrapping">

                                                <div class="form-check form-switch">
                                                    <input class="form-check-input"
                                                        value={db.DBinstalled}
                                                        disabled

                                                        type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                                </div>
                                            </span>

                                        </div>
                                    </div>
                                     )
                                 })}
                    </Accordion.Body>
                    </Accordion.Item>
            )
        })}
  </Accordion>
    </>
  )
}

export default SearchResult