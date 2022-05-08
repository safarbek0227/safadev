from django.shortcuts import render ,redirect
import telebot

TOKEN = '5188135218:AAET1_O7rodv75Uo2onGHhM4JdQMDhIhI7w'
bot = telebot.TeleBot(TOKEN)
user = "801531808"
# Create your views here.
def homeView(request):
    if request.GET:
        bot.send_message(user, f"Portfolio \n {request.GET['name']} {request.GET['email']} \n comment: {request.GET['message']}")
        return redirect('/') 
    return render(request, 'index.html')