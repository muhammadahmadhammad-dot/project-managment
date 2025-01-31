<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class DashbardController extends Controller
{
    public function dashboard(){
        $id = Auth::id();
        $tasks  = Task::all();
        // pending Task
        $pendingTotal = $tasks->where('status','pending')->count();
        $pendingMy = $tasks->where('status','pending')->where('assigned_user_id',$id)->count();
        // Completed
        $completedTotal = $tasks->where('status','completed')->count();
        $completedMy = $tasks->where('status','completed')->where('assigned_user_id',$id)->count();
        // progess
        $progessTotal = $tasks->where('status','in_progess')->count();
        $progessMy = $tasks->where('status','in_progess')->where('assigned_user_id',$id)->count();
        
        $myTasks = TaskResource::collection($tasks->where('assigned_user_id',$id));
        return inertia('Dashboard',
         compact('pendingTotal','pendingMy','completedTotal','completedMy',
         'progessTotal','progessMy','myTasks'));
    }
}
