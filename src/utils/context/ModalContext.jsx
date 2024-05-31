import {createContext, useState} from 'react'
import PropTypes from 'prop-types';

export const ModalContext = createContext();
const ModalProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const openModal = (contents) => {
        setModalIsOpen(true)
        setModalContent(contents)
    }

    const closeModal = () => {
        setModalIsOpen(false)
        setModalContent('')
    }

    const details = {
        modalIsOpen, modalContent, openModal, closeModal
    }

  return (
    <div>
        <ModalContext.Provider value={details}>
            {children}
        </ModalContext.Provider>
    </div>
  )
}
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ModalProvider
