import ModalBodyComponent from './modal-body.jsx';
import ModalFooterComponent from './modal-footer.jsx';
import ModalHeaderCloseButtonComponent from './modal-header-close-button.jsx';
import ModalHeaderTitleComponent from './modal-header-title.jsx';
import ModalHeaderComponent from './modal-header.jsx';
import ModalRootComponent from './modal-root.jsx';

const ModalComponent = {
    Root: ModalRootComponent,
    Header: ModalHeaderComponent,
    Title: ModalHeaderTitleComponent,
    Close: ModalHeaderCloseButtonComponent,
    Body: ModalBodyComponent,
    Footer: ModalFooterComponent
}
 
export default ModalComponent;
