<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use \Mail;

class ContactController extends Controller
{

    /**
     * Send contact to e-mail
     *
     * http://learninglaravel.net/learn-to-send-emails-using-gmail-and-sendgrid-in-laravel-5
     * @param {Object} $request
     * @return {void}
     */
    function sendContact(Request $request) {
        // Data and View
        $data = $request->all();
        $date = new \DateTime();
        $data['date'] = $date->format('d/m/Y');
        $data['time'] = $date->format('H:i');
        $error = false;

        // $view = view()->make('contact.email', $data);
        // return $view
        // variavel $message é transformada para Object sem motivo nenhum;
        // http://stackoverflow.com/questions/19412055/sending-email-with-laravel-but-doesnt-recognize-variable

        // Configure and send e-mail
        Mail::send('contact.email', $data, function($message) use ($data) {

            $subject = "[Contato do Site][${data['name']}]";
            $message->from('contato@metodomicroinfo.com.br',
                $subject);

            $message->to('carlohcs@gmail.com', $data['name'])
			->subject($subject);
        });

        return response()->json(['error' => $error]);
    }
}
