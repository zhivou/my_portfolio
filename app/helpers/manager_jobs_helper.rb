module ManagerJobsHelper

  DATE_TODAY = Date.today

  ##
  # Expects job_element. Renders pending/expired/successful icon for
  # job index page cards.
  #
  def pending_interview(job_element)
    date_created =  job_element.created_at
    invited_for_interview = job_element.interview

    case
    when date_created + 30.days < DATE_TODAY && !invited_for_interview
      # Expired
      "<span class='badge badge-danger'>Expired</span>".html_safe
    when invited_for_interview
      # Interview Happened
      "<span class='badge badge-success'>Invited</span>".html_safe
    else
      # Pending
      "<span class='badge badge-primary'>Pending</span>".html_safe
    end
  end

  ##
  # Translates boolean to yes or no
  # for replay field
  #
  def pending_reply(job_element)
    if job_element.replied
      "<span class='badge badge-success'>Yes</span>".html_safe
    else
      "<span class='badge badge-danger'>No</span>".html_safe
    end
  end
end
