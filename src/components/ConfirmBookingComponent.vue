<template>
  <div class="confirm-booking-container">
    <div class="thankyou-message">Thank You!</div>
    <div class="booking-details-container">
      <div class="invoice-header">Ticket Invoice</div>
      <div class="display-userId">
        <div class="userid-tag">UserId: </div>
        <div class="userid-id"> {{userId | filterUserId }}</div>
      </div>
      <div class="display-movie">
        <div class="movie-tag">Movie: </div>
        <div class="movie-movie">{{movie.name}}</div>
      </div>
      <div class="display-name">
        <div class="name-tag">Name: </div>
        <div class="name-username">{{username}}</div>
      </div>
      <div class="display-ticket-meta">
        <div class="display-date">
            <div class="date-tag">Date </div>
            <div class="date-date">{{date | filterUIDate }}</div>
        </div>
        <div class="display-slot">
            <div class="slot-tag">Start Time</div>
            <div class="slot-slot">{{slot | filterShowTime }}</div>
        </div>
        <div class="display-status">Confimed!</div>
        <div class="display-seats">
            <div class="seats-tag">
                Seats:
            </div>
            <div class="seats-seats">
              <br>
                <p class="seat-number" v-for="(seat, index) in bookingStatus.seats" :key="index">
                    {{seat}}
                </p>
            </div>
        </div>
      </div>
      <div class="display-price">
          <div class="price-tag">SubTotal: </div>
          <div class="price-price">Rs. {{bookingStatus.totalAmount}} /-</div>
      </div>
      <div class="save-btn">
        <button class="save-ticket-invoice-btn" @click="saveTicket()">Save Ticket Invoice</button>
      </div>
      
    </div>
  </div>
</template>


<script src="./scripts/ConfirmBooking.js"></script>

<style scoped>
.date-tag, .slot-tag{
  font-weight: bold;
}
.save-ticket-invoice-btn{
    border: none;
    border-radius: 1em;
    padding: 1em;
    background-color: #F84464;
    color: white;
    transition: all .3s;
}
.save-ticket-invoice-btn:hover{
    cursor: pointer;
    background-color: #D52344;
}
.confirm-booking-container {
  height: 150vh;
  width: 100vw;
  background-color: #222434;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.booking-details-container {
    background-color: #151928;
    color: white;
    border-radius: 0.5em;
    height: auto;
    width: 50%;
    margin: 1em;
    margin-top: 2em !important;
    padding: 1.5em;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
}

.thankyou-message {
  font-size: large;
  padding: 1em;
  margin-top: 2em;
  border-radius: 1em;
  background-color: #151928;
  color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.invoice-header{
    display: flex;
    width: 100%;
    margin-bottom: 1em;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.display-userId, .display-name, .display-date, .display-movie, .display-slot, .display-seats, .display-price, .display-status, .display-ticket-meta{
    background-color: #222434;
    margin: .5em;
    padding: 1em;
    border-radius: 1em;
    width: 100%;
    font-size: small;
}

.price-price{
  color: rgb(2, 189, 2);
}
.display-status{
    color: rgb(12, 243, 104);
    font-weight: bold;
    font-size: medium;
    text-align: center;
}
.display-seats {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    overflow: scroll;
    padding: .5em;
}
.display-userId,  .display-name, .display-movie{
    display: flex;
    justify-content: space-between;
    align-items: space-between;
}
.display-ticket-meta{
    display: flex;

}

.display-price{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
}

.seats-seats{
  display: inherit;
}
.seat-number{
  padding: .2em;
}
.save-btn{
    margin-top: 2em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
}
@media screen  and (max-width:900px){
    .display-ticket-meta{
        display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    }
}

@media screen  and (max-width: 750px){
  .booking-details-container{
    background-color: #151928;
    color: white;
    border-radius: 0.5em;
    height: auto;
    width: 98%;
    margin: 1em;
    margin-top: 2em !important;
    padding: 1.5em;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
  }
}
</style>