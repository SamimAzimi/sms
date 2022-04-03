import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faNetworkWired,
    faRadio,
    faRoute,
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal'
import { DataContext } from '../Context'
function NetEntry() {
    const val = useContext(DataContext)
    const { dataEntry, setDataEntry } = val
    const { network } = dataEntry
    return (
        <Modal.Body>
            <h1>Network Section</h1>
            <div className="d-flex flex-column w-100" >
                <div class="input-group w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faNetworkWired} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="IP Address"
                        value={dataEntry.network.IP}
                        onChange={e => setDataEntry({ ...dataEntry, network: { ...network, IP: e.target.value } })} />
                </div>
                <div class="input-group w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faRoute} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="Gateway"
                        value={dataEntry.network.gateway}
                        onChange={e => setDataEntry({ ...dataEntry, network: { ...network, gateway: e.target.value } })}
                    />
                </div>
                <div class="input-group flex-nowrap w-50 p-3">
                    <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faRadio} /></span>
                    <input type="text"
                        class="form-control"
                        placeholder="Subnet Mask"
                        value={dataEntry.network.subnetMask}
                        onChange={e => setDataEntry({ ...dataEntry, network: { ...network, subnetMask: e.target.value } })}
                    />
                </div>
            </div>
        </Modal.Body>
    )
}

export default NetEntry