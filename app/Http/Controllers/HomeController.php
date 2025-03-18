<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\View\View;
use App\Models\Category;

class HomeController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $categories = Category::all();
        /*$posts = Post::where('category_id', request('category_id'))
            ->latest()
            ->get();*/

        $posts = Post::when(request('category_id'), function() {
            return Post::where('category_id', request('category_id'));
        })->latest()->get();

        return view('home', [
            'categories' => $categories,
            'posts' => $posts,
        ]);
    }

    /**
     * @param Post $post
     * @return View
     */
    public function post(Post $post): View
    {
        $post = Post::find((int)$post->id);

        // return view('article', ['post' => $post]);
        return view('article', compact('post'));
    }
}
