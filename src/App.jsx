import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import {
  faTicket,
  faMoneyBill,
  faPercent,
  faAddressCard,
  faPersonCircleQuestion,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
export default function App() {
  return (
    <>
      <div className="content">
        <div className="header">
          <div className="header-title">
            Ticketing anlegen
            <h1 className="header-subtitle">
              Lassen sie für nur 0,99€ Servicegebühr pro Ticket, ihren
              Vorverkauf über ELGIO laufen.
            </h1>
          </div>
          <button className="header-btn">Abbrechen</button>
        </div>
        <div className="main-content">
          <div className="side-menu">
            <div className="col">
              <div className="circle">
                <FontAwesomeIcon icon={faTicket} className="side-menu-icon" />
              </div>
              <h1 className="col-text">Ticketvarianten</h1>
            </div>
            <div className="col">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="side-menu-icon"
                />
              </div>
              <h1 className="col-text">Bezahlmethode</h1>
            </div>
            <div className="col">
              <div className="circle">
                <FontAwesomeIcon icon={faPercent} className="side-menu-icon" />
              </div>
              <h1 className="col-text">Mehrwertsteuer</h1>
            </div>
            <div className="col">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="side-menu-icon"
                />
              </div>
              <h1 className="col-text">Rechnungsadresse</h1>
            </div>
            <div className="col">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faPersonCircleQuestion}
                  className="side-menu-icon"
                />
              </div>
              <h1 className="col-text">Rückfragen</h1>
            </div>
          </div>
          <div className="tickets-box">
            <div className="tickets-box-header">
              <div className="circle" style={{ margin: "15px" }}>
                <FontAwesomeIcon icon={faTicket} className="side-menu-icon" />
              </div>
              <h1 className="tickets-box-title">
                Ticketvarianten
                <h3 className="tickets-box-subtitle">
                  Wählen sie bitte die Verschiedenen Ticketarten, die sie
                  anbieten wollen
                </h3>
              </h1>
            </div>
            <div className="tickets-box-content">
              <div className="tickets-box-ticket">
                <div className="tickets-box-ticket-left">
                  <h1 className="tickets-box-ticket-title">
                    Ticketart 1: Early Bird
                  </h1>
                  <input
                    type="text"
                    id="name-inp"
                    className="tickets-box-inp"
                    placeholder="Early Bird"
                    readOnly
                  />

                  <input
                    type="text"
                    className="tickets-box-inp"
                    readOnly
                    placeholder="10"
                    style={{ marginBottom: "10px" }}
                  />
                </div>
                <div className="tickets-box-ticket-right">
                  <input
                    type="text"
                    className="tickets-box-inp"
                    readOnly
                    style={{ marginTop: "42px", visibility: "hidden" }}
                  />
                  <input
                    type="text"
                    className="tickets-box-inp"
                    readOnly
                    placeholder="200"
                  />
                  <h1 className="tickets-box-ticket-possible-sales">
                    Möglicher Umsatz: <em id="em-sales">1802€</em>
                  </h1>
                  <h1 className="service-fee">abzgl. Servicegebühren</h1>
                </div>
              </div>
              <div className="tickets-box-ticket">
                <div className="tickets-box-ticket-left">
                  <h1 className="tickets-box-ticket-title">
                    Ticketart 1: Early Bird
                  </h1>
                  <input
                    type="text"
                    id="name-inp"
                    className="tickets-box-inp"
                    placeholder="Early Bird"
                    readOnly
                  />

                  <input
                    type="text"
                    className="tickets-box-inp"
                    readOnly
                    placeholder="10"
                    style={{ marginBottom: "10px" }}
                  />
                </div>
                <div className="tickets-box-ticket-right">
                  <input
                    type="text"
                    className="tickets-box-inp"
                    readOnly
                    style={{ marginTop: "42px", visibility: "hidden" }}
                  />
                  <input
                    type="text"
                    className="tickets-box-inp"
                    readOnly
                    placeholder="200"
                  />
                  <h1 className="tickets-box-ticket-possible-sales">
                    Möglicher Umsatz: <em id="em-sales">1802€</em>
                  </h1>
                  <h1 className="service-fee">abzgl. Servicegebühren</h1>
                </div>
              </div>
              <button className="add-ticket">
                <FontAwesomeIcon icon={faPlus} id="add-ticket-icon" />
                <h1 className="add-ticket-button-text">Weitere Ticketart</h1>
              </button>
            </div>
          </div>
          <div className="ticket-overview">
            <div className="ticket-overview-header"></div>
          </div>
        </div>
      </div>
    </>
  );
}
